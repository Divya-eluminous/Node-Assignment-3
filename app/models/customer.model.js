module.exports = (sequelize,Sequelize)=>{
  const model=sequelize.define(
      "customer",
      {
          id:{
              type:Sequelize.INTEGER,
              allowNull:true,
              autoIncrement:true,
              primaryKey:true
          },
          name:{
              type:Sequelize.STRING(200),
              allowNull:false
          },
          email:{
              type:Sequelize.STRING(100),
              allowNull:false   
          },
          mobile:
          {
            type: Sequelize.STRING(13),
            allowNull: false,   
          },
          status:
          {
            type: Sequelize.TINYINT(4),
            allowNull: false, 
            defaultValue:0  
          }
      },
      {
        createdAt: 'created_at', 
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
      }
  );
  return model;
}