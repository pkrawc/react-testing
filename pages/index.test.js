import { expect } from "chai"
import { shallow } from "enzyme"
import App from "./index"

describe("<App />", () => {
  it("Renders without crashing", () => {
    const component = shallow(<App />)
    expect(component).to.exist
  })
})
