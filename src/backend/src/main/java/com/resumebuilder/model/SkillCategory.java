
package com.resumebuilder.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SkillCategory {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String externalId;  // This will store the UUID from the frontend
    private String name;
    
    @ElementCollection
    @CollectionTable(name = "skills", joinColumns = @JoinColumn(name = "skill_category_id"))
    @Column(name = "skill")
    private List<String> skills = new ArrayList<>();
}
