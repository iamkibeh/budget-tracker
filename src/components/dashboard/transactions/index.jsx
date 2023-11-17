import { useState, useEffect } from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Modal,
    TextField,
} from '@mui/material';
import { myTransactions } from '../../../utils/myTransactions';
import MyTable from './MyTable';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        date: '',
    });
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    useEffect(() => {
        // fetch transactions data from API endpoint and update state
        setTransactions(myTransactions);
    }, []);

    const handleAddTransaction = () => {
        // make API request to add transaction and update state
        setAddModalOpen(false);
    };

    const handleEditTransaction = () => {
        // make API request to edit transaction and update state
        setEditModalOpen(false);
    };

    const handleDeleteTransaction = () => {
        // make API request to delete transaction and update state
        setDeleteModalOpen(false);
    };

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEditClick = (transaction) => {
        setSelectedTransaction(transaction);
        setFormData({
            description: transaction.description,
            amount: transaction.amount,
            date: transaction.date,
        });
        setEditModalOpen(true);
    };

    const handleDeleteClick = (transaction) => {
        setSelectedTransaction(transaction);
        setDeleteModalOpen(true);
    };

    return (
        <>
<MyTable />
            {/* <Modal open={addModalOpen} onClose={() => setAddModalOpen(false)}>
                <div>
                    <TextField name="description" label="Description" value={formData.description} onChange={handleFormChange} />
                    <TextField name="amount" label="Amount" value={formData.amount} onChange={handleFormChange} />
                    <TextField name="date" label="Date" value={formData.date} onChange={handleFormChange} />
                    <Button onClick={handleAddTransaction}>Add Transaction</Button>
                </div>
            </Modal>

            <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
                <div>
                    <TextField name="description" label="Description" value={formData.description} onChange={handleFormChange} />
                    <TextField name="amount" label="Amount" value={formData.amount} onChange={handleFormChange} />
                    <TextField name="date" label="Date" value={formData.date} onChange={handleFormChange} />
                    <Button onClick={handleEditTransaction}>Save Changes</Button>
                </div>
            </Modal>

            <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
                <div>
                    <p>Are you sure you want to delete this transaction?</p>
                    <p>Description: {selectedTransaction?.description}</p>
                    <p>Amount: {selectedTransaction?.amount}</p>
                    <p>Date: {selectedTransaction?.date}</p>
                    <Button onClick={handleDeleteTransaction}>Delete Transaction</Button>
                </div>
            </Modal> */}
        </>
    );
};

export default Transactions;
