# Recipe Form - Validation Notes

Dette dokument beskriver mulige fejl i Recipe Form og forslag til fejlbeskeder.  
Validering implementeres senere i projektet.

---

## 1. Title

**Påkrævet felt**

Mulige fejl:

- Mangler input
- For kort tekst

Fejlbeskeder:

- "Title is required"
- "Title must be at least 3 characters"

---

## 2. Instructions

**Påkrævet felt**

Mulige fejl:

- Mangler tekst
- For kort beskrivelse

Fejlbeskeder:

- "Instructions are required"
- "Please write a longer description"

---

## 3. Ingredients

**Påkrævet felt (mindst 1)**

Mulige fejl:

- Ingen ingredienser tilføjet
- Tom ingrediens

Fejlbeskeder:

- "Add at least one ingredient"
- "Ingredient cannot be empty"

---

## 4. Generelt

Brugeren forsøger at sende en ufuldstændig form.

Fejlbesked:

- "Please fill out all fields before submitting"
