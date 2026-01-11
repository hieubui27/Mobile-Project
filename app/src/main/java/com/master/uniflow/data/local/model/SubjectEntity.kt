package com.master.uniflow.data.local.model

import androidx.room.Entity
import androidx.room.PrimaryKey
import java.util.UUID


@Entity(tableName = "subjects")
data class SubjectEntity(
    @PrimaryKey val id: String = UUID.randomUUID().toString(),
    val name: String,
    val teacher: String?,
    val color: String = "#6200EE",
    val isSynced: Boolean = false
)