package com.master.uniflow.data.local.model

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "users")
data class UserEntity(
    @PrimaryKey val userId: String = "local_user",
    val fullName: String,
    val studentCode: String,
    val major: String? = null
)