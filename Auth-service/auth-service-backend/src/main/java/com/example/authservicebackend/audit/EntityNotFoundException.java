package com.example.authservicebackend.audit;


import com.example.authservicebackend.audit.model.base.BaseEntity;

public class EntityNotFoundException extends RuntimeException {

    public EntityNotFoundException(Class<? extends BaseEntity> aClass) {
        super("Entity of type: [%s] not found".formatted(aClass.getSimpleName()));
    }

    public EntityNotFoundException(Long id, Class<? extends BaseEntity> aClass) {
        super("Entity with id: [%d] of type: [%s] not found".formatted(id, aClass.getSimpleName()));
    }

}
