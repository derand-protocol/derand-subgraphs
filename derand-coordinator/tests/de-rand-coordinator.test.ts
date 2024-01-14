import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ConfigSet } from "../generated/schema"
import { ConfigSet as ConfigSetEvent } from "../generated/DeRandCoordinator/DeRandCoordinator"
import { handleConfigSet } from "../src/derand-coordinator"
import { createConfigSetEvent } from "./de-rand-coordinator-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let minimumRequestConfirmations = 123
    let maxGasLimit = BigInt.fromI32(234)
    let newConfigSetEvent = createConfigSetEvent(
      minimumRequestConfirmations,
      maxGasLimit
    )
    handleConfigSet(newConfigSetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ConfigSet created and stored", () => {
    assert.entityCount("ConfigSet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ConfigSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "minimumRequestConfirmations",
      "123"
    )
    assert.fieldEquals(
      "ConfigSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "maxGasLimit",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
