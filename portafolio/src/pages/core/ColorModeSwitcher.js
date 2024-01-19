import { DarkMode, LightMode } from "@mui/icons-material";
import { useColorScheme, Button, ButtonGroup } from "@mui/material";


export default function ColorModeSwitcher() {

    const { mode, setMode } = useColorScheme();

    return (
        <ButtonGroup>
            <Button variant={mode === "light" ? "contained" : "outlined"} onClick={() => { setMode('light') }}>
                <LightMode sx={{mr: "10px"}} />
                {("light-mode")}
            </Button>
            <Button variant={mode === "dark" ? "contained" : "outlined"} onClick={() => { setMode('dark') }}>
                <DarkMode sx={{mr: "10px"}} />
                {("dark-mode")}
            </Button>
        </ButtonGroup>
    );
};