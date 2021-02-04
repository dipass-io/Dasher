package como.dipassio.com;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("como.dipassio.com");

        noClasses()
            .that()
            .resideInAnyPackage("como.dipassio.com.service..")
            .or()
            .resideInAnyPackage("como.dipassio.com.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..como.dipassio.com.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
