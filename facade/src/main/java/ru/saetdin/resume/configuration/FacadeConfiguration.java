package ru.saetdin.resume.configuration;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.support.DefaultConversionService;
import ru.saetdin.resume.dto.converter.ResumeDtoConverter;
import ru.saetdin.resume.dto.converter.TitleDtoConverter;

@Configuration
public class FacadeConfiguration {

    @Bean(name = "DTOConversionService")
    public ConversionService conversionService() {
        DefaultConversionService defaultConversionService = new DefaultConversionService();
        defaultConversionService.addConverter(new ResumeDtoConverter());
        defaultConversionService.addConverter(new TitleDtoConverter());
        return defaultConversionService;
    }
}
