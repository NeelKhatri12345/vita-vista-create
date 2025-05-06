
package com.resumebuilder.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PersonalInfo {
    private String name;
    private String email;
    private String phone;
    private String location;
    private String summary;
}
