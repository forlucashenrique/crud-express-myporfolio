const projectsRepository = require('../repositories/projectsRepository');

exports.getAllProjects = async (req, res) => {
    const results = await projectsRepository.getAllProjects();

    res.status(200).json(results);
};

exports.createProject = async (req, res) => {
    const results = await projectsRepository.createProject(req.body);

    res.status(201).json(results);
};

exports.getProjectById = async (req, res) => {
    const results = await projectsRepository.getProjectById(req.params.id);

    res.status(200).json(results);
}

exports.updateProject = async (req, res) => {
    const results = await projectsRepository.updateProject(req.params.id, req.body);

    res.status(200).json(results);
}

exports.deleteProject = async (req, res) => {
    const results = await projectsRepository.deleteProject(req.params.id);

    res.status(200).json(results);
}