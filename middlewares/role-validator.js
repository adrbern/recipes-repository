const isAdminRole = async (req, res, next) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'se quiere verificar el rol sin el token primero'
        })
    }

    const { role, name } = req.user;

    if (role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${name} no es administrador - no puede hacer esto`
        })
    }

    next();
}

const hasRole = (...roles) => {
    return (req, res , next) => {
        console.log(roles, req.user.role);

        if (!req.user) {
            return res.status(500).json({
                msg: 'se quiere verificar el rol sin el token primero'
            })
        }

        if(!roles.includes(req.user.role)) {
            return res.status(401).json({
                msg: `El servicio require uno de estos roles ${roles}`
            });
        } 

        next();
    };
}

module.exports = {
    isAdminRole,
    hasRole
}