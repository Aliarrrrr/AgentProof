import fs from 'node:fs';
import assert from 'node:assert/strict';
import ganache from 'ganache';
import {BrowserProvider,ContractFactory,Contract,sha256,toUtf8Bytes,ZeroHash} from 'ethers';
const artifact=JSON.parse(fs.readFileSync('dist/contract.json'));
const rpc=ganache.provider({logging:{quiet:true},chain:{chainId:677,hardfork:'merge'}});
try {
 const provider=new BrowserProvider(rpc);provider.pollingInterval=50;
 const a=await provider.getSigner(0),b=await provider.getSigner(1);
 const c=await new ContractFactory(artifact.abi,artifact.bytecode,a).deploy();await c.waitForDeployment();
 const text='AI security report: no private keys are stored.';
 const digest=sha256(toUtf8Bytes(text));
 assert.equal(await c.proofs(await a.getAddress(),digest),0n);
 await(await c.attest(digest)).wait();
 assert.ok(await c.proofs(await a.getAddress(),digest)>0n);
 assert.equal(await c.proofs(await b.getAddress(),digest),0n,'A different signer must not inherit authorship');
 assert.equal(await c.proofs(await a.getAddress(),sha256(toUtf8Bytes(text+'!'))),0n,'Modified report must not verify');
 await assert.rejects(async()=>{await(await c.attest(digest)).wait()},'Duplicate proofs must revert');
 await assert.rejects(async()=>{await(await c.attest(ZeroHash)).wait()},'Empty digest must revert');
 await(await new Contract(await c.getAddress(),artifact.abi,b).attest(digest)).wait();
 assert.ok(await c.proofs(await b.getAddress(),digest)>0n,'Each author can attest independently');
 console.log('PASS: deploy, attest, read, tamper detection, author isolation, duplicate rejection, zero rejection, independent authors');
} finally { await rpc.disconnect(); }
