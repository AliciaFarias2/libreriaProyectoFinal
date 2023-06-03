module.exports = (sequelize, dataTypes) => {
    let alias = 'Autor';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombres: {
            type: dataTypes.STRING(25),
        },
        apellido: {
            type: dataTypes.STRING(20),
        },
        fecha_de_nacimiento: {
            type: dataTypes.DATEONLY,
        },
        nacionalidad: {
            type: dataTypes.STRING(20),
        },
    };
    let config = {
        tableName : 'autores',
        timestamps : false,
    }

    const Autor = sequelize.define(alias, cols, config);

    Autor.associate = function(models) {
        Autor.hasMany(models.Libro, {
            foreignKey : "id_autor",
            targetkey : "id",
        });

    }

    return Autor;
}