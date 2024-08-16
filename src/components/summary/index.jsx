import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import TransactionForm from "../add-transaction"
import TransactionChartSummary from "../chart";


export default function Summary({ onClose, isOpen, totalExpense, totalIncome }) {

    return (
        <Box p="6"
            border={"1px solid"}
            borderColor={"gray.100"}
            overflow={"hidden"}
            borderRadius={"10"}
            background={"white"}
            display={"flex"}>
            <Flex w="full"
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                    xl: "row"
                }}>
                <Flex flex={1}
                    w={"full"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    ml={"-20"} mr={2}>
                    <Heading size={"nd"} mb={"4"} color={"gray.600"}>
                        Balans iz ${totalIncome - totalExpense}
                    </Heading>
                    <Flex justifyContent={"space-evenly"}
                        alignItems={"center"}
                        bg={"gray.50"}
                        w={"full"} h="100px"
                        border={"1px solid"}
                        borderColor={"gray.100"}>
                        <Flex flexDirection={"column"}>
                            <Heading color={"gray.700"}>${totalIncome}</Heading>
                            <Text color={"gray.600"}>Total Income</Text>
                        </Flex>
                    </Flex>

                    <Flex justifyContent={"space-evenly"}
                        alignItems={"center"}
                        bg={"gray.50"}
                        w={"full"} h="100px"
                        border={"1px solid"}
                        borderColor={"gray.100"}>
                        <Flex flexDirection={"column"}>
                            <Heading color={"gray.700"}>${totalExpense}</Heading>
                            <Text color={"gray.600"}>Total Expense</Text>
                        </Flex>
                    </Flex>
                </Flex>
                < Box
                    flex={1}
                    mt={"-10px"}
                    ml={-90}
                    mr={"5"}
                    width={"300px"}
                    height={"300px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}>
                    <Heading>
                        <TransactionChartSummary expense={totalExpense} income={totalIncome} />
                    </Heading>
                </Box>
            </Flex>
            <TransactionForm isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}