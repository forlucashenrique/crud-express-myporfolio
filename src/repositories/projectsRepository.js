const { pool } = require('../config/db');


exports.getAllProjects = async () => {
    try {
        const result = await pool.query('SELECT * FROM projects');
        const results = { 'results': (result) ? result.rows : null };

        return results;
    } catch (error) {
        console.log(error);
        return { message: "Erro ao buscar projetos" };
    } finally {
        console.log('Requisição GET à rota /projects executada com sucesso!');
    }
}


exports.getProjectById = async (id) => {
    try {
        
        const result = await pool.query(`SELECT * FROM projects WHERE id = ${id}`);
        const results = { 'results': (result) ? result.rows : null };
  
        return results
    } catch (error) {
        console.log(error);
        return { message: "Erro ao buscar projects" };
    } finally {
        console.log('Requisição GET à rota /projects/:id executada com sucesso!');
    }
}

exports.createProject = async (projects) => {

    try {
        const { project_name, project_image_url } = projects;
        const result = await pool.query(`INSERT INTO projects (project_name, project_image_url) VALUES ('${project_name}', '${project_image_url}') RETURNING *`);
        const results = { 'results': (result) ? result.rows : null };
  
        return results
    } catch (error) {
        console.log(error);
        return { message: "Erro ao criar projects" };
    } finally {
        console.log('Requisição POST à rota /projects executada com sucesso!');
    }

}


exports.updateProject = async (id, projects) => {
    
        try {
            const { project_name, project_image_url } = projects;
            const result = await pool.query(`UPDATE projects SET project_name = '${project_name}', project_image_url = '${project_image_url}' WHERE id = ${id} RETURNING *`);
            const results = { 'results': (result) ? result.rows : null };
    
            return results
        } catch (error) {
            console.log(error);
            return { message: "Erro ao atualizar projects" };
        } finally {
            console.log('Requisição PUT à rota /projects/:id executada com sucesso!');
        }
    
}

exports.deleteProject = async (id) => {
        
        try {
            const result = await pool.query(`DELETE FROM projects WHERE id = ${id} RETURNING *`);
            const results = { 'results': (result) ? result.rows : null };
    
            return results
        } catch (error) {
            console.log(error);
            return { message: "Erro ao deletar projects" };
        } finally {
            console.log('Requisição DELETE à rota /projects/:id executada com sucesso!');
        }
}