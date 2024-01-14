import {
  ExecutorAdded as ExecutorAddedEvent,
  ExecutorDeposit as ExecutorDepositEvent,
  ExecutorWithdraw as ExecutorWithdrawEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/DeRandFeeManager/DeRandFeeManager"
import {
  ExecutorAdded,
  ExecutorDeposit,
  ExecutorWithdraw,
  OwnershipTransferred
} from "../generated/schema"

export function handleExecutorAdded(event: ExecutorAddedEvent): void {
  let entity = new ExecutorAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.executor = event.params.executor
  entity.DeRandFeeManager_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutorDeposit(event: ExecutorDepositEvent): void {
  let entity = new ExecutorDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositor = event.params.depositor
  entity.consumer = event.params.consumer
  entity.chainId = event.params.chainId
  entity.executor = event.params.executor
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutorWithdraw(event: ExecutorWithdrawEvent): void {
  let entity = new ExecutorWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.executor = event.params.executor
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount

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
