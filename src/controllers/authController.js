const authRepository = require('../repositories/authRepository');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await authRepository.getUsuarioByEmail(email);

    console.log(user);
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    if (user.password !== password) {
        return res.status(401).json({ message: 'Senha incorreta' });
    }
    res.status(200).json(user);
}