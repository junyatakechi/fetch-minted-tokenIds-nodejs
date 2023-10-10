import { ethers } from 'ethers';
import fs from 'fs';

// コマンドライン引数の取得
const [_, __, infuraApiKey, contractAddress] = process.argv;

// ethers.jsの初期化
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${infuraApiKey}`);

// コントラクトとのインタラクションの準備
const contractInterface = new ethers.utils.Interface([
    'function minted(uint) view returns (bool)',
    'function tokenByIndex(uint256) view returns (uint256)',
    'function totalSupply() view returns (uint256)'
]);

const contract = new ethers.Contract(contractAddress, contractInterface, provider);

async function getMintedTokens(): Promise<number[]> {
    const mintedTokens: number[] = [];
    const totalSupply = await contract.totalSupply();

    for (let i = 0; i < totalSupply; i++) {
        const tokenId = await contract.tokenByIndex(i);
        const isMinted = await contract.minted(tokenId);
        if (isMinted) {
            mintedTokens.push(tokenId.toNumber());
            console.log("minted: ", tokenId.toNumber());
        }else{
            console.error("Not Minted: ", tokenId.toNumber());
        }
    }
    return mintedTokens;
}

getMintedTokens().then(tokens => {
    fs.writeFileSync(`${contractAddress}.json`, JSON.stringify(tokens));
    console.log(`Data written to ${contractAddress}.json`);
}).catch(error => {
    console.error("Error:", error);
});
