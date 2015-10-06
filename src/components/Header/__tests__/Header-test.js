jest.dontMock("../Header.jsx");
let React = require("react/addons");
let Header = require("../Header.jsx");

describe("Header", function() {
    it("Renders with the correct attributes and properties", function() {
        const TestUtils = React.addons.TestUtils;
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render((<Header />));
        const component = shallowRenderer.getRenderOutput();
        expect(component.props.children.type).toBe("h1");
    });
});