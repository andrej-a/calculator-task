import React from "react";

import { Expression, ExpressionWrapper } from "../styles";

const ExpressionComponent = React.memo(({ expression }) => {
    return (
        <ExpressionWrapper>
            <Expression>{expression}</Expression>
        </ExpressionWrapper>
    )
})
export default ExpressionComponent;
