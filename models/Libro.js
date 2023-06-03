module.exports = (sequelize, dataTypes) => {
    let alias = 'Libro';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING(20),
        },
        id_autor: {
            type: dataTypes.INTEGER,
        },
        id_categoria: {
            type: dataTypes.INTEGER,
        },
        id_editorial: {
            type: dataTypes.INTEGER
        },
        fecha_lanzamiento: {
            type: dataTypes.DATEONLY,
        },
        idioma: {
            type: dataTypes.STRING(10),
        },
        paginas: {
            type: dataTypes.INTEGER,
        },
    };
    
    let config = {
        tableName : 'libros',
        timestamps : false,
    }

    const Libro = sequelize.define(alias, cols, config);

    Libro.associate = function(models) {
        Libro.belongsTo(models.Autor, {
            foreignKey: "id_autor"
        });
        Libro.belongsTo(models.Categoria, {
            foreignKey: "id_categoria"
        });
        Libro.belongsTo(models.Editorial,{
            foreignKey: "id_editorial"
        });
    }

    return Libro;
};