package ru.saetdin.resume.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.saetdin.resume.Description;
import ru.saetdin.resume.DescriptionService;
import ru.saetdin.resume.Note;
import ru.saetdin.resume.NoteService;

@RestController
@RequestMapping("/helper")
public class HelperWindowsController {

    @Autowired
    private DescriptionService descriptionService;

    @Autowired
    private NoteService noteService;

    @CrossOrigin
    @RequestMapping(path = "/create/{uuid}", method = RequestMethod.POST)
    public void createReference(@PathVariable String uuid) {
        Description description = new Description();
        description.setReferenceId(uuid);
        Note note = new Note();
        note.setReferenceId(uuid);
        descriptionService.create(description);
        noteService.create(note);
    }
}
