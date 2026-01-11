package com.master.uniflow.data.local.model

import androidx.room.Entity
import androidx.room.PrimaryKey
import java.util.UUID

@Entity(
    tableName = "tasks",
    foreignKeys = [
        androidx.room.ForeignKey(
            entity = SubjectEntity::class,
            parentColumns = ["id"],
            childColumns = ["subjectId"],
            onDelete = androidx.room.ForeignKey.CASCADE
        )
    ]
)
data class TaskEntity(
    @PrimaryKey val id: String = UUID.randomUUID().toString(),
    val subjectId: String,
    val title: String,
    val deadline: Long, // Lưu timestamp để dễ sort
    val priority: Int = 1, // 0: Low, 1: Med, 2: High
    val isDone: Boolean = false,
    val isSynced: Boolean = false
)