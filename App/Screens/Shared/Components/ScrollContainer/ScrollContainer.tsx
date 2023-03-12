
import {
    appBarHeight,
    drawerClosedWidth,
    drawerWidth,
    rightBarWidth
} from "@Config/constants";
import useWindowDimensions from "@Hooks/useWindowDimensions";
import { useSelector } from "react-redux";
import SimpleBarReact from "simplebar-react";

function ScrollContainer({
    children,
}: any) {

    const {
        height,
        width,
    } = useWindowDimensions()

    const {
        sidebar,
    } = useSelector((state: any) => state.layout)

    return (
        <SimpleBarReact
            color="green"
            style={{
                height: height
                    - appBarHeight,
                width: width
                    - (
                        sidebar ?
                            drawerWidth
                            :
                            drawerClosedWidth
                    )
                    - rightBarWidth
                    - 16 * 1,
                paddingRight: 15,
                border: '0px solid red',
            }}
        >
            {children}
        </SimpleBarReact>
    )
}

export default ScrollContainer