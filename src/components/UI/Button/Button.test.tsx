

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "./";

describe("Button Component", () => {
  it("should render text correctly", () => {
    const { getByText } = render(<Button text="Click Me" onPress={() => {}} />);
    expect(getByText("Click Me")).toBeTruthy();
  });

  it("should call onPress when clicked", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button text="Click Me" onPress={onPressMock} />
    );

    fireEvent.press(getByText("Click Me"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("should render with solid variant by default", () => {
    const { getByTestId } = render(<Button text="Button" onPress={() => {}} />);

    const button = getByTestId("button");
    expect(button?.props.style).toMatchObject(
      expect.objectContaining({ backgroundColor: "#6366F1" })
    );
  });

  it("should render with outline variant", () => {
    const { getByTestId  } = render(
      <Button text="Button" onPress={() => {}} variant="outline" />
    );

    const button = getByTestId("button");
    expect(button?.props.style).toMatchObject(
      expect.objectContaining({ borderWidth: 2 })
    );
  });

  it("should not call onPress when disabled", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button text="Button" onPress={onPressMock} disabled />
    );

    fireEvent.press(getByText("Button"));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it("should render with icon only", () => {
    const { queryByText } = render(
      <Button icons={["add"]} onPress={() => {}} />
    );

    expect(queryByText("add")).toBeTruthy();
  });

  it("should apply custom styles", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByTestId   } = render(
      <Button text="Button" onPress={() => {}} style={customStyle} />
    );

    const button = getByTestId("button");
    expect(button?.props.style).toMatchObject(customStyle);
  });
});
