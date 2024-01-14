import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ExecutorAdded,
  ExecutorDeposit,
  ExecutorWithdraw,
  OwnershipTransferred
} from "../generated/DeRandFeeManager/DeRandFeeManager"

export function createExecutorAddedEvent(
  executor: Address,
  id: BigInt
): ExecutorAdded {
  let executorAddedEvent = changetype<ExecutorAdded>(newMockEvent())

  executorAddedEvent.parameters = new Array()

  executorAddedEvent.parameters.push(
    new ethereum.EventParam("executor", ethereum.Value.fromAddress(executor))
  )
  executorAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return executorAddedEvent
}

export function createExecutorDepositEvent(
  depositor: Address,
  consumer: Address,
  chainId: BigInt,
  executor: Address,
  amount: BigInt
): ExecutorDeposit {
  let executorDepositEvent = changetype<ExecutorDeposit>(newMockEvent())

  executorDepositEvent.parameters = new Array()

  executorDepositEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  executorDepositEvent.parameters.push(
    new ethereum.EventParam("consumer", ethereum.Value.fromAddress(consumer))
  )
  executorDepositEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )
  executorDepositEvent.parameters.push(
    new ethereum.EventParam("executor", ethereum.Value.fromAddress(executor))
  )
  executorDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return executorDepositEvent
}

export function createExecutorWithdrawEvent(
  executor: Address,
  recipient: Address,
  amount: BigInt
): ExecutorWithdraw {
  let executorWithdrawEvent = changetype<ExecutorWithdraw>(newMockEvent())

  executorWithdrawEvent.parameters = new Array()

  executorWithdrawEvent.parameters.push(
    new ethereum.EventParam("executor", ethereum.Value.fromAddress(executor))
  )
  executorWithdrawEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  executorWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return executorWithdrawEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
