/*
    Copyright 2021 The caver-js Authors
    This file is part of the caver-js library.
    The caver-js library is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    The caver-js library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with the caver-js. If not, see <http://www.gnu.org/licenses/>.
*/

import Account from '../../../caver-account/src'
import { KlaytnCall } from '../../../caver-rpc/src/klay'
import { Keyring } from '../../../caver-wallet/src/keyring/keyringFactory'
import SignatureData from '../../../caver-wallet/src/keyring/signatureData'

export interface CreateTransactionObject {
    account?: Account
    from?: string
    to?: string
    value?: string | number
    input?: string
    nonce?: string | number
    gas?: string | number
    gasPrice?: string | number
    chainId?: string | number
    feePayer?: string
    signatures?: string[] | string[][] | SignatureData | SignatureData[]
    feePayerSignatures?: string[] | string[][] | SignatureData | SignatureData[]
    feeRatio?: string | number
    humanReadable?: boolean
    codeFormat?: string | number
}

export default class AbstractTransaction {
    constructor(typeString: string, createTxObj: CreateTransactionObject)

    static _klaytnCall: KlaytnCall

    getRLPEncoding(): string
    getCommonRLPEncodingForSignature(): string
    sign(key: string | Keyring, index?: number, hasher?: Function): Promise<AbstractTransaction>
    appendSignatures(signatures: string[] | string[][] | SignatureData | SignatureData[]): void
    combineSignedRawTransactions(rlpEncodedTxs: string[]): string
    getRawTransaction(): string
    getTransactionHash(): string
    getSenderTxHash(): string
    getRLPEncodingForSignature(): string
    recoverPublicKeys(): string[]
    fillTransaction(): Promise<void>
    validateOptionalValues(): void

    public type: string
    private _from: string
    public from: string
    private _nonce: string
    public nonce: string
    private _gas: string
    public gas: string
    private _gasPrice: string
    public gasPrice: string
    private _chainId: string
    public chainId: string
    private _signatures: string
    public signatures: string
}