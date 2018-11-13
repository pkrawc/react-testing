import { expect } from "chai"
import { shallow } from "enzyme"
import About from "./index"

describe("<About />", () => {
  it("Should have the about class.", () => {
    const component = shallow(<About />)
    expect(component.hasClass("about")).to.be.true
  })
  it("Should be able subscribe to mailing list.", () => {
    const component = shallow(<About />)
    component.find(".button--subscribe").simulate("click")
    expect(component.state("subscribed")).to.be.true
  })
})
