
package com.resumebuilder.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Experience {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String externalId;  // This will store the UUID from the frontend
    private String company;
    private String position;
    private String startDate;
    private String endDate;
    
    @Column(length = 2000)
    private String description;
}
