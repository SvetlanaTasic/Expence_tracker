import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    ModalHeader,
    FormControl,
    FormLabel,
    Button,
    Radio,
    RadioGroup,
    Input
} from "@chakra-ui/react"
import { GlobalContext } from "../../context";
import { useContext } from "react"

export default function TransactionForm({ onClose, isOpen }) {
    const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext)

    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        handleFormSubmit(formData)
    }


    return <Modal onClose={onClose} isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add New Transaction</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Enter Description</FormLabel>
                        <Input placeholder="Enter transaction description"
                            name="description"
                            type="text"
                            onChange={handleFormChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Enter Amount</FormLabel>
                        <Input placeholder="Enter transaction amount"
                            name="amount"
                            type="number"
                            onChange={handleFormChange} />
                    </FormControl>
                    <RadioGroup mt="5" value={value} onChange={setValue}>
                        <Radio
                            checked={formData.type === "income"}
                            value="income"
                            colorScheme="blue"
                            name="type"
                            onChange={handleFormChange}>Income</Radio>
                        <Radio checked={formData.type === "expense"}
                            value="expense"
                            colorScheme="red"
                            name="type"
                            onChange={handleFormChange}>Expense</Radio>
                    </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button mr={"4"} onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose} type="submit">Add</Button>
                </ModalFooter>
            </ModalContent>
        </form>
    </Modal>
}