import { BigInt, Bytes } from '@graphprotocol/graph-ts'
import { ConsumerBalance } from '../generated/schema'
import { ZERO_BI } from './constants'

export function getOrCreateConsumerBalance(
  consumer: Bytes, chainId: BigInt, executor: Bytes
): ConsumerBalance {
  let balanceId = consumer.toHexString() + "-" + 
    chainId.toString() + "-" + executor.toHexString()
  
  let existingBalance = ConsumerBalance.load(balanceId)

  if (existingBalance != null) {
    return existingBalance as ConsumerBalance
  }

  let newBalance = new ConsumerBalance(balanceId)
  newBalance.consumer = consumer
  newBalance.chainId = chainId
  newBalance.executor = executor
  newBalance.amount = ZERO_BI

  newBalance.save()

  return newBalance
}

export function increaseConsumerBalance(
  consumer: Bytes, chainId: BigInt, executor: Bytes, amount: BigInt
): ConsumerBalance {
  let balance = getOrCreateConsumerBalance(consumer, chainId, executor)
  balance.amount = balance.amount.plus(amount)

  balance.save()

  return balance
}