module.exports = (sequelize, dataTypes) => {
    let alias = 'Editorial';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING(20),
        },
        pais: {
            type: dataTypes.STRING(20),
        },
    };
    let config = {
        tableName : 'editoriales',
        timestamps : false,
    }

    const Editorial = sequelize.define(alias, cols, config);

    Editorial.associate = function(models) {
        Editorial.hasMany(models.Libro, {
            foreignKey : "id_editorial",
            targetkey : "id"
        });
    }

    return Editorial;
}