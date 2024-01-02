import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ConfigSet,
  OwnershipTransferred,
  RandomWordsFulfilled,
  RandomWordsRequested
} from "../generated/DeRandCoordinator/DeRandCoordinator"

export function createConfigSetEvent(
  minimumRequestConfirmations: i32,
  maxGasLimit: BigInt
): ConfigSet {
  let configSetEvent = changetype<ConfigSet>(newMockEvent())

  configSetEvent.parameters = new Array()

  configSetEvent.parameters.push(
    new ethereum.EventParam(
      "minimumRequestConfirmations",
      ethereum.Value.fromUnsignedBigInt(
        BigInt.fromI32(minimumRequestConfirmations)
      )
    )
  )
  configSetEvent.parameters.push(
    new ethereum.EventParam(
      "maxGasLimit",
      ethereum.Value.fromUnsignedBigInt(maxGasLimit)
    )
  )

  return configSetEvent
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

export function createRandomWordsFulfilledEvent(
  requestId: BigInt,
  consumer: Address,
  outputSeed: BigInt,
  success: boolean
): RandomWordsFulfilled {
  let randomWordsFulfilledEvent = changetype<RandomWordsFulfilled>(
    newMockEvent()
  )

  randomWordsFulfilledEvent.parameters = new Array()

  randomWordsFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  randomWordsFulfilledEvent.parameters.push(
    new ethereum.EventParam("consumer", ethereum.Value.fromAddress(consumer))
  )
  randomWordsFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "outputSeed",
      ethereum.Value.fromUnsignedBigInt(outputSeed)
    )
  )
  randomWordsFulfilledEvent.parameters.push(
    new ethereum.EventParam("success", ethereum.Value.fromBoolean(success))
  )

  return randomWordsFulfilledEvent
}

export function createRandomWordsRequestedEvent(
  requestId: BigInt,
  preSeed: BigInt,
  minimumRequestConfirmations: i32,
  callbackGasLimit: BigInt,
  numWords: BigInt,
  sender: Address
): RandomWordsRequested {
  let randomWordsRequestedEvent = changetype<RandomWordsRequested>(
    newMockEvent()
  )

  randomWordsRequestedEvent.parameters = new Array()

  randomWordsRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  randomWordsRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "preSeed",
      ethereum.Value.fromUnsignedBigInt(preSeed)
    )
  )
  randomWordsRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "minimumRequestConfirmations",
      ethereum.Value.fromUnsignedBigInt(
        BigInt.fromI32(minimumRequestConfirmations)
      )
    )
  )
  randomWordsRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "callbackGasLimit",
      ethereum.Value.fromUnsignedBigInt(callbackGasLimit)
    )
  )
  randomWordsRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "numWords",
      ethereum.Value.fromUnsignedBigInt(numWords)
    )
  )
  randomWordsRequestedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return randomWordsRequestedEvent
}
