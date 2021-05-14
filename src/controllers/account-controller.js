const { v4: uuidv4 } = require("uuid");

class AccountController {
    constructor () {
        this.customer = []
    }

    create(request, response) {
        try {
            const { cpf, name } =  request.body;
            const id = uuidv4();
            const customerAlreadyExists = this.customer.some((customer) => customer.cpf === cpf)
            
            if (customerAlreadyExists) {
                return response.status(400).json({ error: "Customer already exists"});
            }
            
            this.customer.push({
                cpf,
                name,
                id,
                statement: []
            })
            
            console.log(this.customer);
            return response.status(201).send()
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

module.exports = new AccountController();