import ValidatorTemplate from '../_template';
let validate = new ValidatorTemplate();

validate.setRules({
    userId: 'required|string',
    userName: 'required|string',
});

export default (req, res, next) => {
    validate.validate(req.body) ?
        next() : res.status(validate.apiResp.code).send(validate.apiResp);
}