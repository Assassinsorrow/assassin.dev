import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggleButton() {
    const { toggleColorMode } = useColorMode();
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: "inline-block" }}
                key={useColorModeValue("light", "dark")}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}>
                <IconButton
                    aria-label="Toggle theme"
                    colorScheme={useColorModeValue("purple", "gray")}
                    icon={useColorModeValue(<FaMoon />, <FaSun />)}
                    onClick={toggleColorMode}></IconButton>
            </motion.div>
        </AnimatePresence>
    );
}
