import { NavLink } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import { Divider } from "@mui/material";
import ResponsiveAppBar from "./SnackBar";

const NavigationBar = ({ t }) => {
    return (
        <>
        <Divider />
        <ResponsiveAppBar />
        </>

    );
}

export default withTranslation('core')(NavigationBar);
