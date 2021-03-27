const Contact = require("../../models/contact");

let contactStorage = {
    create: async (data) => {
        const contact = new Contact(data);

        try {
            const res = await contact.save();
            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    update: async (id, data) => {
        try {
            let contact = await Contact.findOne({ _id: id });

            if (!contact) {
                throw new Error("Not found in database");
            }

            contact.title = data.title;
            contact.status = data.status;
            const res = await contact.save();

            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    get: async (id) => {
        try {
            let contact = await Contact.findOne({ _id: id });

            if (!contact) {
                throw new Error("Not found in database");
            }

            return contact;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    delete: async (id) => {
        try {
            await Contact.findOneAndDelete({ _id: id });
            return "Deleted";
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAll: async () => {
        try {
            const res = await Contact.find();
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

module.exports = contactStorage;
