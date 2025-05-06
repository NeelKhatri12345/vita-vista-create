
package com.resumebuilder.service;

import com.resumebuilder.dto.ResumeDto;
import com.resumebuilder.model.Resume;
import com.resumebuilder.repository.ResumeRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ResumeService {

    private final ResumeRepository resumeRepository;

    @Autowired
    public ResumeService(ResumeRepository resumeRepository) {
        this.resumeRepository = resumeRepository;
    }

    @Transactional(readOnly = true)
    public List<Resume> getAllResumes() {
        return resumeRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Resume getResumeById(Long id) {
        return resumeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Resume with ID " + id + " not found"));
    }

    @Transactional
    public Resume createResume(Resume resume) {
        return resumeRepository.save(resume);
    }

    @Transactional
    public Resume updateResume(Long id, Resume updatedResume) {
        Resume existingResume = getResumeById(id);
        
        // Update fields
        existingResume.setPersonalInfo(updatedResume.getPersonalInfo());
        existingResume.getExperiences().clear();
        existingResume.getExperiences().addAll(updatedResume.getExperiences());
        existingResume.getEducation().clear();
        existingResume.getEducation().addAll(updatedResume.getEducation());
        existingResume.getSkillCategories().clear();
        existingResume.getSkillCategories().addAll(updatedResume.getSkillCategories());
        
        return resumeRepository.save(existingResume);
    }

    @Transactional
    public void deleteResume(Long id) {
        if (!resumeRepository.existsById(id)) {
            throw new EntityNotFoundException("Resume with ID " + id + " not found");
        }
        resumeRepository.deleteById(id);
    }
}
