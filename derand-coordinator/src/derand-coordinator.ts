import {
  ConfigSet as ConfigSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RandomWordsFulfilled as RandomWordsFulfilledEvent,
  RandomWordsRequested as RandomWordsRequestedEvent
} from "../generated/DeRandCoordinator/DeRandCoordinator"
import {
  ConfigSet,
  OwnershipTransferred,
  RandomWordsFulfilled,
  RandomWordsRequested
} from "../generated/schema"
import { ZERO_BI } from "./constants"

export function handleConfigSet(event: ConfigSetEvent): void {
  let entity = new ConfigSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minimumRequestConfirmations = event.params.minimumRequestConfirmations
  entity.maxGasLimit = event.params.maxGasLimit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRandomWordsFulfilled(
  event: RandomWordsFulfilledEvent
): void {
  let entity = new RandomWordsFulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.consumer = event.params.consumer
  entity.executor = event.params.executor
  entity.outputSeed = event.params.outputSeed
  entity.success = event.params.success

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  const txReceipt = event.receipt
  if(txReceipt) {
    entity.gasUsage = txReceipt.gasUsed
  } else {
    entity.gasUsage = ZERO_BI
  }

  entity.save()
}

export function handleRandomWordsRequested(
  event: RandomWordsRequestedEvent
): void {
  let entity = new RandomWordsRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.preSeed = event.params.preSeed
  entity.minimumRequestConfirmations = event.params.minimumRequestConfirmations
  entity.callbackGasLimit = event.params.callbackGasLimit
  entity.numWords = event.params.numWords
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
