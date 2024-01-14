import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ExecutorAdded } from "../generated/schema"
import { ExecutorAdded as ExecutorAddedEvent } from "../generated/DeRandFeeManager/DeRandFeeManager"
import { handleExecutorAdded } from "../src/de-rand-fee-manager"
import { createExecutorAddedEvent } from "./de-rand-fee-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let executor = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let id = BigInt.fromI32(234)
    let newExecutorAddedEvent = createExecutorAddedEvent(executor, id)
    handleExecutorAdded(newExecutorAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExecutorAdded created and stored", () => {
    assert.entityCount("ExecutorAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExecutorAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "executor",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
