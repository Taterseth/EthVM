import { EthValue, Hex, HexNumber } from '@app/core/models'
import BN from 'bignumber.js'
import { Uncle as RawUncle } from 'ethvm-common'

export class Uncle {
  private readonly id: string
  private cache: any = {}

  constructor(private readonly uncle: RawUncle) {
    this.id = new Hex(this.uncle.hash).toString()
  }

  public getId(): string {
    return this.id
  }

  public isUncle(): boolean {
    return true
  }

  public getType(): string {
    return 'uncle'
  }

  public getNumber(): number {
    if (!this.cache.number) {
      this.cache.number = new BN(this.uncle.number).toNumber()
    }
    return this.cache.number
  }

  // TODO; Review value
  public getBlockHeight(): number {
    // return this.uncle.blockHeight
    return 0
  }

  // TODO; Review value
  public getPosition(): number {
    // return this.uncle.position
    return 0
  }

  public getParentHash(): Hex {
    if (!this.cache.parentHash) {
      this.cache.parentHash = new Hex(this.uncle.parentHash)
    }
    return this.cache.parentHash
  }

  public getHash(): string {
    return '0x' + this.uncle.hash
  }

  public getTimestamp(): Date {
    return new Date(this.uncle.timestamp * 1000)
  }

  public getNonce(): Hex {
    if (!this.cache.nonce) {
      this.cache.nonce = this.uncle.nonce
    }
    return this.cache.nonce
  }

  public getMiner(): Hex {
    if (!this.cache.miner) {
      this.cache.miner = new Hex(this.uncle.author)
    }
    return this.cache.miner
  }

  // TODO: Add field to new entities
  public getTotalDifficulty(): HexNumber {
    // if (!this.cache.totalDifficulty) {
    //   this.cache.totalDifficulty = this.uncle.totalDifficulty
    // }
    // return this.cache.totalDifficulty
    return new HexNumber('0')
  }

  // TODO; Add field to new entities
  public getDifficulty(): HexNumber {
    // if (!this.cache.difficulty) {
    //   this.cache.difficulty = this.uncle.difficulty
    // }
    // return this.cache.difficulty
    return new HexNumber('0')
  }

  public getStateRoot(): string {
    return this.uncle.stateRoot ? '0x' + this.uncle.stateRoot : ''
  }

  public getExtraData(): string {
    return this.uncle.extraData ? '0x' + this.uncle.extraData : ''
  }

  // TODO; Add field to new entities
  public getMinerReward(): EthValue {
    // const rewards = this.uncle.rewards
    // if (!this.cache.getMinerReward) {
    //   this.cache.getMinerReward = rewards[this.uncle.miner]
    // }
    // return this.cache.getMinerReward
    return new EthValue(0)
  }

  // TODO; Add field to new entities
  public getTotalReward(): EthValue {
    // if (!this.cache.getTotalReward) {
    //   let total = 0
    //   for (const address in this.uncle.rewards) {
    //     total = this.uncle.rewards[address] + total
    //   }
    //   this.cache.getTotalReward = total
    // }
    // return this.cache.getTotalReward
    return new EthValue('0')
  }

  // TODO; Add field to new entities
  public getUncleReward(): EthValue {
    // if (!this.cache.getReward) {
    //   let total = 0
    //   for (const address in this.uncle.rewards) {
    //     total = this.uncle.rewards[address] + total
    //   }
    //   this.cache.getReward = total - this.uncle.rewards[this.uncle.miner]
    // }
    // return this.cache.getReward
    return new EthValue(0)
  }
}
