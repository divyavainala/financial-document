package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/documents")
@CrossOrigin
public class DocumentController {

    @Autowired
    private DocumentRepository repo;

    // Upload
    @PostMapping("/upload")
    public Document upload(@RequestBody Document doc) {
        return repo.save(doc);
    }

    // Get all
    @GetMapping
    public List<Document> getAll() {
        return repo.findAll();
    }

    // Search (important)
    @GetMapping("/search")
    public List<Document> search(@RequestParam String query) {
        return repo.findAll().stream()
                .filter(d -> d.getContent().toLowerCase().contains(query.toLowerCase()))
                .toList();
        
    }
    @GetMapping
    public String test() {
        return "API Working!";
    }
}