## README: Minted TokenIds Fetcher

このスクリプトは、指定されたNFTコントラクトの`minted`マッピングを使用して、すでに発行されているtokenIdを取得します。結果はJSON形式でファイルに出力されます。

### 前提条件

- Node.jsがインストールされていること
- ethers.jsライブラリがインストールされていること (`npm install ethers` でインストール可能)

### 使い方

1. スクリプトのあるディレクトリに移動します。
2. 以下のコマンドを実行してスクリプトを起動します。

```bash
$ node start YOUR_INFURA_API_KEY YOUR_CONTRACT_ADDRESS
```

- `YOUR_INFURA_API_KEY` には、Infuraから取得したAPIキーを指定してください。
- `YOUR_CONTRACT_ADDRESS` には、対象となるコントラクトのアドレスを指定してください。

1. スクリプトが実行され、既に発行されているtokenIdがカレントディレクトリの`YOUR_CONTRACT_ADDRESS.json`という名前のファイルに保存されます。

### 注意

- このスクリプトは、最大10,000のtokenIdを走査します。この数はコントラクトによって異なる場合がありますので、必要に応じてスクリプトを修正してください。
- Infura APIの制限に注意してください。大量のリクエストを短時間に送ると、API制限に達する可能性があります。
- エラーや例外が発生した場合、コンソールに詳細が表示されます。

### ライセンス

このスクリプトはMITライセンスのもとで提供されます。詳細は[LICENSE](LICENSE)を参照してください。
