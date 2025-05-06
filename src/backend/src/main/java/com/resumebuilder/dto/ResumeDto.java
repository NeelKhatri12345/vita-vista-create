
package com.resumebuilder.dto;

import com.resumebuilder.model.Education;
import com.resumebuilder.model.Experience;
import com.resumebuilder.model.PersonalInfo;
import com.resumebuilder.model.SkillCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResumeDto {
    private Long id;
    private PersonalInfo personalInfo;
    private List<Experience> experiences = new ArrayList<>();
    private List<Education> education = new ArrayList<>();
    private List<SkillCategory> skillCategories = new ArrayList<>();
}
