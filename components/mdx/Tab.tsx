import { Component, PropsWithChildren } from "react";

interface TabProperties {
  id: string;
  label: string;
}

class Tab extends Component {
  public id: string;
  public label: string;
  public children: PropsWithChildren["children"];
  public isTab: true = true;

  public constructor(props: PropsWithChildren<TabProperties> & { isTab?: any }) {
    super(props);
    this.id = props.id;
    this.label = props.label;
    this.children = props.children;
  }

  render() {
    return <div>{this.children}</div>;
  }
}

export default Tab;
