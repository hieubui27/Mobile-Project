package com.master.uniflow.data.local.model

import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.PrimaryKey
import java.util.UUID


@Entity(
    tableName = "subjects",
    foreignKeys = [
        ForeignKey(
            entity = UserEntity::class,
            parentColumns = ["userId"],
            childColumns = ["ownerId"],
            onDelete = ForeignKey.CASCADE
        )
    ]
)
data class SubjectEntity(
    @PrimaryKey val subjectId: String = UUID.randomUUID().toString(),
    val ownerId: String = "local_user",
    val subjectName: String,
    val classCode: String,
    val teacherName: String,
    val colorHex: String = "#D32F2F"
)