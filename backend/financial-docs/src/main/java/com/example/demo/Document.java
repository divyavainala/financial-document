package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import lombok.Data;

@Entity
@Data
public class Document {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String companyName;
    private String documentType;
    private String content;
    private String uploadedBy;

    // ADD THIS
    public String getContent() {
        return content;
    }
}
